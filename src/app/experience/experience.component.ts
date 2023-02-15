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
        "Scrum Master and lead for a team of full stack engineers, responsible for holding dailies, plannings, retrospectives, refinements and grooming sessions.",
        "Manage, build and oversee the development of highly optimized and reusable reactive UI components, shell fragments using Angular, TypeScript and Tailwind based on Micro-Frontend's Architecture.",
        "Building microservices from ground zero based on Microservices Design Architecture, using Java and Spring, meeting robust standards following Best-Practices by adapting Modular Approach in design following SOLID Design Principles.",
        "Engage in productive collaboration with product managers, designers, developers, and other stakeholders to deliver outstanding user-centered products."
      ],
    },
    {
      enabled: false,
      from: new Date('1/1/2021'),
      to: new Date('12/31/2021'),
      name: 'Software Development Specialist',
      content: [
        "Building reactive, responsive modern hybrid frontend applications, frameworks for web / mobile using Angular framework and Tailwind to deliver a seamless cross platform user experience.",
        "Build generic geolocation component based library integrated with google/bing maps, to display information, draw, drop pins, render graphics using PIXI, Angular, HTML, CSS.",
        "Facilitate the authentication workflow for multiple applications (mobile and web) using Single Sign On(SSO) methodology with SAML and Spring Boot, built microservices responsible for tracking customer session activities, concurrency checks, role based application access.",
        "Creating a subscriber analytics microservice for tracking user location based on IMEI / IMSI in near realtime using event driven architecture involving Kafka topics, Redis (Jedis), Java, Spring Boot.",
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
        "Migration of old legacy application written on Adobe Flex to Angular, HTML, CSS which involved writing new services, routing, extensive use of RxJS framework (Observables and Subjects).",
        "Understanding the core business of the company and how telecom company works, understanding the different between multiple telecom technologies like Edge, 2G, 3G, 4G and 5G",
        "Assisted in creating data pipelines reducing the substantial cost and time by 50%, by migrating the costly aggregation processing of call data done on Oracle & SQL Server to Kafka and Spark.",
        "Automating the CI/CD pipeline using Jenkins, Docker, Nexus Repository to increase the speed and quality of software delivery, reduce manual errors, and ensure that applications are always up-to-date.",
        "Responsible for documenting all the application level changes and enhancements including Data-Flow-Diagrams (DFDs), Sequence Diagrams and Class Diagrams.",
        "Involved in various bug fixes and responsible for enhancements in both UI and Functional areas."
      ],
    },
    ];

    let roles2 = [
      {
        enabled: false,
        from: new Date('10/01/2015'),
        to: new Date('06/30/2017'),
        name: 'Software Developer',
        content: [
          "Developed high-volume & low-latency web-services delivering high-availability & performance using Spring framework and JAVA.",
          "Built modern Hybrid front-end applications for web/mobile using Angular and Angular Material framework to deliver a seamless cross-platform user experience.",
          "Worked on building the Customer Relationship Management (CRM) platform to enable the sales team to cater customers and leads and provide them analytics by aggregating and transforming survey data.",
          "Engaged in all phases of SDLC as requirement gathering, feasibility analysis, sprint planning, architecture design, coding, debugging and maintenance.",
          "Creation of various Automation tools for providing support across multiple clients instantly."
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
