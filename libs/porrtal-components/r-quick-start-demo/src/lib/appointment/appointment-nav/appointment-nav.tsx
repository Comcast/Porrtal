/*
Copyright 2024 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { ViewComponentProps } from '@porrtal/r-api';
import { useEffect, useRef, useState } from 'react';
import {
  AppointmentData,
  fetchAppointmentData,
} from '../../data/appointment-data';
import styles from './appointment-nav.module.scss';
import * as d3 from 'd3';
import { useShellDispatch } from '@porrtal/r-shell';

export function AppointmentNav(props: ViewComponentProps) {
  const shellDispatch = useShellDispatch();
  const [appointmentData, setAppointmentData] = useState<AppointmentData>();
  const [startTime, setStartTime] = useState<number>(
    Math.floor(Date.now() / (1000 * 60 * 60)) * (1000 * 60 * 60) -
      1000 * 60 * 60 * 3
  );
  const [scheduleProps, setScheduleProps] = useState({
    margin: { top: 30, right: 30, bottom: 30, left: 50 },
    width: 180,
    height: 400,
    barWidth: 150,
    nowColor: '#EA4335',
    barStyle: {
      background: '#616161',
      textColor: 'white',
      width: 300,
      startPadding: 2,
      endPadding: 3,
      radius: 3,
    },
  });
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    fetchAppointmentData(500).then((d) => setAppointmentData(d));
  }, []);
  useEffect(() => {
    if (appointmentData && startTime && scheduleProps && containerRef.current) {
      console.log('drawing daily schedule');
      d3.select(containerRef.current).select('svg').remove();
      const svg = d3
        .select(containerRef.current)
        .append('svg')
        .attr('width', scheduleProps.width)
        .attr('height', scheduleProps.height);

      const appointments = appointmentData.filter(
        (appt) =>
          appt.date > startTime && appt.date < startTime + 1000 * 60 * 60 * 9
      );

      if (appointments) {
        const fromDate = startTime;
        const toDate = startTime + 1000 * 60 * 60 * 9;
        if (fromDate && toDate) {
          const yScale = d3
            .scaleTime()
            .domain([fromDate, toDate])
            .range([
              scheduleProps.margin.top,
              scheduleProps.height - scheduleProps.margin.bottom,
            ]);

          const yAxis = d3.axisLeft(yScale).ticks(24);

          svg
            .append('g')
            .attr('transform', `translate(${scheduleProps.margin.left},0)`)
            .attr('opacity', 0.5)
            .call(yAxis);

          const gridLines = d3
            .axisRight(yScale)
            .ticks(24)
            .tickSize(scheduleProps.barStyle.width);

          svg
            .append('g')
            .attr('transform', `translate(${scheduleProps.margin.left},0)`)
            .attr('opacity', 0.3)
            .call(gridLines);

          const barGroups = svg
            .selectAll('g.barGroup')
            .data(appointments)
            .join('g')
            .attr('class', 'barGroup');

          barGroups
            .append('rect')
            .on('click', (evt, d) =>
              shellDispatch({
                type: 'launchView',
                viewId: 'AppointmentDetail',
                state: { appointmentId: d.appointmentId },
              })
            )
            .attr('fill', (d) => scheduleProps.barStyle.background)
            .attr('x', scheduleProps.margin.left)
            .attr(
              'y',
              (d) =>
                yScale(new Date(d.date)) + scheduleProps.barStyle.startPadding
            )
            .attr('height', (d) => {
              const startPoint = yScale(new Date(d.date));
              const endPoint = yScale(new Date(d.date + d.duration));
              return (
                endPoint -
                startPoint -
                scheduleProps.barStyle.endPadding -
                scheduleProps.barStyle.startPadding
              );
            })
            .attr('width', scheduleProps.barStyle.width)
            .attr('rx', scheduleProps.barStyle.radius);
        }
      }
    }
  }, [appointmentData, startTime, scheduleProps]);
  return (
    <div className={styles['container']}>
      <h3 className={styles['title']}>Daily Schedule</h3>
      <div className={styles['data-container']} ref={containerRef}></div>
    </div>
  );
}

export default AppointmentNav;
