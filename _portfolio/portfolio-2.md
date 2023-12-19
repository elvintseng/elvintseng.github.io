---
title: <h1 class="ieee-heading">Control Charts for Limited Phase I Data</h1>
# <h1 class="ieee-title">Security in Machine Learning</h1>
# excerpt: "Short description of portfolio item number 1<br/><img src='/images/500x300.png'>"
collection: portfolio
---


<!-- Under construction. <br/><img src='/images/500x300.png'> -->
In Statistical Process Control (SPC), the process is typically divided into two phases: Phase I and Phase II. 
- During Phase I, data are collected to study the in-control (IC) distribution. 
- In Phase II monitoring, the quality characteristics are sampled sequentially with the goal of detecting any deviation relative to the (**estimated**) IC process.
  
However, since the IC process is estimated from Phase I data, a sufficiently large amount of Phase I data is required for the monitoring scheme to attain its nominal power, which can be impractical in certain scenarios. Conventional approach with limited Phase I data includes the self-starting control chart. My research proposed two change-point detection EWMA control charts on Weibull data. The proposed methods can:
- monitor the process without knowing the in-control scale parameter with only a few Phase I in-control data
- estimate the unknown change-point and the in-control and out-of-control parameters at the same time when the proposed charts trigger a signal
- extend to Type II censored data to accommodate the censoring mechanism in lifetime experiments