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
export const fetchAppointmentData = (delay: number) => {
  return new Promise<AppointmentData>((resolve) => {
    setTimeout(() => {
      resolve(appointmentData);
    }, delay);
  });
};

export type AppointmentData = typeof appointmentData | undefined;
export type Appointment = typeof appointmentData[0];

export const appointmentData = [
  {
    appointmentId: 1,
    accountId: 1,
    date: Date.now() + 1000 * 60 * 60 * 2,
    item: 'Kickoff Meeting',
    description: 'Introduction to the development process.',
    location: 'Baker Street Cafe',
    duration: 1000 * 60 * 30,
  },
  {
    appointmentId: 2,
    accountId: 2,
    date: Date.now() + 1000 * 60 * 60 * 0,
    item: 'Slide Review',
    description: 'Review the initial slides.',
    location: '101 18th Street, Suite 100',
    duration: 1000 * 60 * 60,
  },
  {
    appointmentId: 3,
    accountId: 4,
    date: Date.now() + 1000 * 60 * 60 * 4,
    item: 'Business Overview',
    description: 'Present the Important Business Use Cases',
    location: '2357 Smith Drive',
    duration: 1000 * 60 * 60,
  },
  {
    appointmentId: 4,
    accountId: 1,
    date: Date.now() + 1000 * 60 * 60 * 24,
    item: 'Review Screen Mockups',
    description: 'Review the initial screen mockups for the application',
    location: 'Baker Street Cafe',
    duration: 1000 * 60 * 30,
  },
  {
    appointmentId: 5,
    accountId: 2,
    date: Date.now() + 1000 * 60 * 60 * 28,
    item: 'Final Slide Review',
    description: 'Review the slides and receive the PowerPoint files',
    location: '101 18th Street, Suite 100',
    duration: 1000 * 60 * 60 * 2,
  },
  {
    appointmentId: 6,
    accountId: 3,
    date: Date.now() + 1000 * 60 * 60 * 48,
    item: 'Development Process Overview',
    description: 'Introduction to the development process',
    location: 'Waffles R Us #6',
    duration: 1000 * 60 * 30,
  },
  {
    appointmentId: 7,
    accountId: 4,
    date: Date.now() + 1000 * 60 * 60 * 49,
    item: 'Development Process Overview',
    description: 'Introduction to the development process',
    location: 'Waffle House #27',
    duration: 1000 * 60 * 45,
  },
  {
    appointmentId: 8,
    accountId: 5,
    date: Date.now() + 1000 * 60 * 60 * 50,
    item: 'Computer Inventory',
    description: 'Review current inventory and plan new orders',
    location: '512 3rd Street, Suite 1520',
    duration: 1000 * 60 * 30,
  },
  {
    appointmentId: 9,
    accountId: 1,
    date: Date.now() + 1000 * 60 * 60 * 72,
    item: 'Screen demo',
    description: 'Show screens and collect feedback',
    location: 'Baker Street Cafe',
    duration: 1000 * 60 * 60,
  },
  {
    appointmentId: 10,
    accountId: 4,
    date: Date.now() + 1000 * 60 * 60 * 74,
    item: 'Screen demo',
    description: 'Show screens and collect feedback',
    location: 'Waffle House #27',
    duration: 1000 * 60 * 60,
  },
];
