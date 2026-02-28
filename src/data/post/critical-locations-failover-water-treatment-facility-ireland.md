---
publishDate: 2026-02-28
title: "Why Critical Locations Cannot Rely on One Internet Line: Water Treatment Facility Case Study"
excerpt: A remote water treatment facility was stuck on a 10 Mbps download and 1 Mbps upload DSL line. We installed a Starlink Enterprise primary connection with 5G failover to show why critical locations need backup internet, not just faster internet.
image: "~/assets/images/water-treatment-facility-failover-gateway.webp"
category: Hardware
tags:
  - failover
  - starlink
  - 5g
  - business-internet
  - remote-site
  - ireland
  - case-study
author: Unified Networks
---

Some locations can put up with internet dropping for a while.

A critical site cannot.

This job was for a remote water treatment facility. Before the upgrade, the site only had a DSL line giving around **10 Mbps download** and **1 Mbps upload**.

That is not just slow. For a site like this, it is a risk.

And here is the bigger problem: even if you improve speed, one single line is still one single point of failure.

That is why this project was not only about getting better internet. It was about building proper failover.

## Faster internet helps. Failover is what protects the site.

A lot of people focus on speed first.

And yes, speed mattered here. Moving from 10/1 DSL to a Starlink-based setup is a major jump.

But at a critical location, the more important question is this:

What happens when the main connection drops?

If the answer is "everything stops," then the site is still exposed.

That is why failover matters so much for remote and critical locations in Ireland.

## The setup we installed

For this site, we installed:

- Starlink Enterprise as the main broadband connection
- a failover gateway to manage the internet handoff
- a 5G router as the backup connection

So the main connection is Starlink, and if that path has a problem, the gateway can fail over to 5G instead of leaving the site offline.

<figure>
  <img src="/water-treatment-facility/gateway.webp" alt="Failover gateway installed for Starlink and 5G backup at a remote water treatment facility in Ireland" loading="lazy" />
  <figcaption>The failover gateway gives the site a proper primary and backup internet path instead of relying on one line.</figcaption>
</figure>

That is the difference between "better broadband" and "resilient broadband."

## Why this matters more in remote locations

Remote sites usually have fewer good options.

Fibre may not be available.
DSL may be poor.
Mobile signal can vary.

So people often end up choosing the least bad single connection and hoping it behaves.

That is not a great plan for a critical location.

A remote site should be thinking about:

- what the main connection will be
- what the backup connection will be
- how traffic switches over when the main path fails

This site now has a much stronger setup because the design does not depend on one line behaving perfectly forever.

## Why Starlink made sense here

In this location, Starlink made sense because the old DSL line was simply not enough.

Going from around 10 Mbps down and 1 Mbps up to Starlink Enterprise changes what the site can realistically do day to day.

It gives the location a far more usable primary connection, especially in a place where traditional fixed broadband options are weak.

<figure>
  <img src="/water-treatment-facility/starlink.jpg" alt="Starlink installed at a remote water treatment facility in Ireland" loading="lazy" />
  <figcaption>Starlink gave this remote site a much stronger primary connection than the old DSL line ever could.</figcaption>
</figure>

But again, Starlink alone was not the full answer.

The full answer was Starlink **plus** failover.

If you are looking at this kind of setup for your own site, our [Starlink installation and network integration](/services/starlink-installation-and-integration-dublin) service covers the install side properly.

## Why 5G backup is still worth having

Some people ask why you would put 5G behind Starlink.

Simple answer: because backup should be different from the main path.

If the main connection has a problem, you want another route available. In many remote locations, 5G is a practical backup option because it is quick to deploy and good enough to carry key traffic during an outage.

Backup links do not always need to match the primary in every way.

They need to keep the important things alive.

That is the real job of failover.

## Critical locations should not be designed around hope

This is the part that matters most.

At a critical location, downtime is not just annoying. It can delay operations, remote access, support, reporting, and the general ability to keep the site reachable when it needs to be.

So the design goal should not be:

"What is the fastest single connection we can get?"

It should be:

"What happens when the main connection fails?"

That is the question too many sites ignore until the first real outage.

## What failover actually gives you

For a site like this, failover helps with:

- keeping the location reachable if the main internet path drops
- reducing the impact of outages
- avoiding total dependence on one provider or one access method
- giving the site a more realistic backup plan in a remote area

It is not magic. Some sessions may reconnect during failover. Some services may behave differently on backup bandwidth.

But that is still far better than a hard outage.

If failover is part of what you need, we cover that directly through [internet failover and backup connectivity](/services/internet-failover-and-backup-connectivity-dublin).

## The bigger lesson from this job

This water treatment facility is a good example of something we see a lot:

people start by asking for faster internet  
but the real requirement is reliable internet

Those are not always the same thing.

A faster line with no backup is still fragile.

A properly designed primary plus backup setup gives the site a much better chance of staying online when something goes wrong.

And for critical locations, that is the standard to aim for.

## Final word

This site started with a remote-location problem many people in Ireland know well: weak DSL, limited options, and no room for downtime.

The fix was not just "install Starlink."

The fix was to build the site around **Starlink Enterprise as primary** and **5G failover as backup**, with a failover gateway managing both.

That is what makes the setup practical for a critical location.

If you run a remote or high-dependency site in Ireland, start with [internet failover and backup connectivity](/services/internet-failover-and-backup-connectivity-dublin), [Starlink installation and integration](/services/starlink-installation-and-integration-dublin), or [book a consultation](/#contact).

Related reading: [Internet Failover in Ireland: How Backup Connectivity Keeps Your Business Online](/internet-failover-guide-ireland/) | [Choosing the Right Broadband in Ireland: What to Expect in Urban vs Rural Areas](/choosing-right-broadband-in-ireland-urban-vs-rural/).
