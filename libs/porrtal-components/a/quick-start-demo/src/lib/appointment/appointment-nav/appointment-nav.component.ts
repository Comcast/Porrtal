import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewState } from '@porrtal/a-api';
import {
  appointmentData,
  AppointmentData,
  fetchAppointmentData,
} from '../../data/appointment-data';
import { BehaviorSubject, Observable, takeUntil } from 'rxjs';
import * as d3 from 'd3';
import { ShellStateService } from '@porrtal/a-shell';

@Component({
  selector: 'porrtal-appointment-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-nav.component.html',
  styleUrls: ['./appointment-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentNavComponent implements AfterViewInit {
  @Input() viewState?: ViewState;
  @ViewChild('containerRef') divRef?: ElementRef;

  startTime =
    Math.floor(Date.now() / (1000 * 60 * 60)) * (1000 * 60 * 60) -
    1000 * 60 * 60 * 3;

  scheduleProps = {
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
  };

  constructor(private shellStateService: ShellStateService) {}

  ngAfterViewInit(): void {
    this.loadChart();
  }

  loadChart() {
    if (this.divRef) {
      console.log('drawing daily schedule', this.divRef.nativeElement);
      d3.select(this.divRef.nativeElement).select('svg').remove();

      const svg = d3
        .select(this.divRef.nativeElement)
        .append('svg')
        .attr('width', this.scheduleProps.width)
        .attr('height', this.scheduleProps.height);

      const appointments = appointmentData.filter(
        (appt) =>
          appt.date > this.startTime &&
          appt.date < this.startTime + 1000 * 60 * 60 * 9
      );

      if (appointments) {
        const fromDate = this.startTime;
        const toDate = this.startTime + 1000 * 60 * 60 * 9;
        if (fromDate && toDate) {
          const yScale = d3
            .scaleTime()
            .domain([fromDate, toDate])
            .range([
              this.scheduleProps.margin.top,
              this.scheduleProps.height - this.scheduleProps.margin.bottom,
            ]);

          const yAxis = d3.axisLeft(yScale).ticks(24);

          svg
            .append('g')
            .attr('transform', `translate(${this.scheduleProps.margin.left},0)`)
            .attr('opacity', 0.5)
            .call(yAxis);

          const gridLines = d3
            .axisRight(yScale)
            .ticks(24)
            .tickSize(this.scheduleProps.barStyle.width);

          svg
            .append('g')
            .attr('transform', `translate(${this.scheduleProps.margin.left},0)`)
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
              this.shellStateService.dispatch({
                type: 'launchView',
                viewId: 'AppointmentDetailComponent',
                state: { appointmentId: d.appointmentId },
              })
            )
            .attr('fill', (d) => this.scheduleProps.barStyle.background)
            .attr('x', this.scheduleProps.margin.left)
            .attr(
              'y',
              (d) =>
                yScale(new Date(d.date)) +
                this.scheduleProps.barStyle.startPadding
            )
            .attr('height', (d) => {
              const startPoint = yScale(new Date(d.date));
              const endPoint = yScale(new Date(d.date + d.duration));
              return (
                endPoint -
                startPoint -
                this.scheduleProps.barStyle.endPadding -
                this.scheduleProps.barStyle.startPadding
              );
            })
            .attr('width', this.scheduleProps.barStyle.width)
            .attr('rx', this.scheduleProps.barStyle.radius);
        }
      }
    }
  }
}
