/*
 Template Name: Xacton - Admin & Dashboard Template
 Author: Myra Studio
 File: Dashboard
*/

$(function () {
  'use strict';
  if ($("#morris-bar-example").length) {
    Morris.Bar({
      element: 'morris-bar-example',
      barColors: ['#00c2b2'],
      data: [
        {
          y: 'Sat',
          a: 5000,
        },
        {
          y: 'Sun',
          a: 8000,
        },
        {
          y: 'Mon',
          a: 8500,
        },
        {
          y: 'Tue',
          a: 6000,
        },
        {
          y: 'Wed',
          a: 5500,
        },
        {
          y: 'Thu',
          a: 8200,
        },
        {
          y: 'Fri',
          a: 7500,
        },
      ],
      xkey: 'y',
      ykeys: ['a'],
      hideHover: 'auto',
      gridLineColor: '#CFCFCF',
      resize: true,
      barSizeRatio: 0.4,
      labels: ['SMS']
    });
  }



  if ($("#morris-donut-example").length) {
    Morris.Donut({
      element: 'morris-donut-example',
      resize: true,
      colors: ['#7266bb', '#1d84c6', '#8E0C0C', '#F5EE0C', '#1EF50C'],
      data: [{
        label: "Egypt",
        value: 3500
      },
      {
        label: "KSA",
        value: 2300
      },
      {
        label: "UAE",
        value: 2200
      },
      {
        label: "Qatar",
        value: 4100
      },
      {
        label: "Yemen",
        value: 1200
      }
      ]
    });
  }

  if ($('#morris-line-example').length) {
    Morris.Line({
      element: 'morris-line-example',
      gridLineColor: '#cfcfcf',
      lineColors: ['#f15050'],
      data: [{
        x: 'KSA',
        y: 350000,
      },
      {
        x: 'Egypt',
        y: 1500000,
      },
      {
        x: 'UAE',
        y: 520000,
      },
      {
        x: 'Qatar',
        y: 1200000,
      },
      {
        x: 'Yemen',
        y: 200000,
      },
      ],
      xkey: 'x',
      ykeys: ['y'],
      parseTime: false,
      hideHover: 'auto',
      resize: true,
      labels: ['SMS']
    });
  }
});