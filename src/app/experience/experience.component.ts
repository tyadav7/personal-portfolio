import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { Role } from '../timeline-sub/timeline-sub.component';
import { Job } from '../timeline/timeline.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  jobs: Array<Job> = [];

  constructor() {

    let roles1: Array<Role> = [{
      enabled: false,
      from: new Date('1/1/2022'),
      to: new Date(Date.now()),
      name: 'Software Development Team Lead',
      content: [
        "Supervising full stack development of Java based cloud-native applications for network analytics and optimization operations for 5G, 4G/LTE, and converged mobile networks.",
        "Scrum Master and lead for a team consisting of a team of full stack engineers, responsible for holding dailies, plannings, retrospectives, refinements and grooming sessions.",
        "Manage, build and oversee the development of highly optimized and reusable reactive UI components, shell fragments using Angular and TypeScript based on Micro-Frontend's Architecture.",
        "Building microservices from ground zero based on Microservices Design Architecture, using Java and Spring, meeting robust standards following Best-Practices by adapting Modular Approach in designing the Services following SOLID Design Principles.",
        "Engage in productive collaboration with product managers, designers, developers, and other stakeholders to deliver outstanding user-centered products."
      ],
    },
    {
      enabled: false,
      from: new Date('1/1/2021'),
      to: new Date('12/31/2021'),
      name: 'Software Development Specialist',
      content: [
        "Building reactive, responsive modern hybrid frontend applications, common frameworks for web / mobile using Angular framework and Tailwind css to deliver a seamless cross platform user experience.",
        "Build generic geolocation component based library integrated with google/bing maps, to display information,draw, drop pins, render graphics using PIXI.js. Angular,HTML, CSS on map.",
        "Facilitate the authentication workflow for multiple applications (mobile and web) using Single Sign On(SSO) methodology with SAML and Spring Boot, built microservices responsible for tracking customer session activities, concurrency checks, role based application access.",
        "Creating a subscriber analytics microservice for tracking user location based on IMEI / IMSI in near realtime using event driven architecture involving Kafka topics, Redis (Jedis), Java and Spring Boot and deploying this in cloud using Kubernetes",
        "Designing Database Architecture based on Code-First / DB-First Approach following the Repository Pattern using Spring JPA, Hibernate and SQL Scripts for Creating Tables Schema structure, Stored Procedures (SPs) etc.",
        "Perform code reviews and conduct test driven development to ensure that code meets standards, best practices, and performance requirements."
      ],
    },
    {
      enabled: false,
      from: new Date('6/1/2017'),
      to: new Date('12/31/2020'),
      name: 'Software Developer',
      content: [
      ],
    },
    ];

    let roles2 = [
      {
        enabled: false,
        from: new Date('03/01/2016'),
        to: new Date('06/30/2017'),
        name: 'Software Developer',
        content: [
        ],
      },
      {
      enabled: false,
      from: new Date('10/1/2015'),
      to: new Date('03/28/2016'),
      name: 'Associate Software Developer',
      content: [
      ],
    }]

    this.jobs = [{
      from: new Date('6/1/2017'),
      to: new Date(Date.now()),
      image: '../assets/img/amdocs.svg',
      roles: roles1
    },{
      from: new Date('10/1/2015'),
      to: new Date('6/30/2017'),
      image: '../assets/img/accenture.svg',
      roles: roles2
    }]
  }
}
