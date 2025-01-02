import React, { useEffect } from 'react';
import styles from './SphereCloud.module.css';

const SphereCloud = () => {
  useEffect(() => {
    const all = document.getElementById('all');
    const div1 = document.getElementById('div1');
    const aTags = div1.getElementsByTagName('a');

    let mcList = [];
    let active = false;
    let lasta = 1;
    let lastb = 1;
    let distr = true;
    let tspeed = 10;
    let size = 250;
    let radius = 200;
    let dtr = Math.PI / 180;
    let d = 300;
    let mouseX = 0;
    let mouseY = 0;
    let howElliptical = 1;

    let sa, ca, sb, cb, sc, cc;

    const sineCosine = (a, b, c) => {
      sa = Math.sin(a * dtr);
      ca = Math.cos(a * dtr);
      sb = Math.sin(b * dtr);
      cb = Math.cos(b * dtr);
      sc = Math.sin(c * dtr);
      cc = Math.cos(c * dtr);
    };

    const positionAll = () => {
      let phi, theta, max = mcList.length;

      for (let i = 0; i < max; i++) {
        if (distr) {
          phi = Math.acos(-1 + (2 * i - 1) / max);
          theta = Math.sqrt(max * Math.PI) * phi;
        } else {
          phi = Math.random() * Math.PI;
          theta = Math.random() * (2 * Math.PI);
        }

        mcList[i].cx = radius * Math.cos(theta) * Math.sin(phi);
        mcList[i].cy = radius * Math.sin(theta) * Math.sin(phi);
        mcList[i].cz = radius * Math.cos(phi);

        aTags[i].style.left = `${mcList[i].cx + div1.offsetWidth / 2 - mcList[i].offsetWidth / 2}px`;
        aTags[i].style.top = `${mcList[i].cy + div1.offsetHeight / 2 - mcList[i].offsetHeight / 2}px`;
      }
    };

    const update = () => {
      let a, b;
      if (active) {
        a = (-Math.min(Math.max(-mouseY, -size), size) / radius) * tspeed;
        b = (Math.min(Math.max(-mouseX, -size), size) / radius) * tspeed;
      } else {
        a = lasta * 0.98;
        b = lastb * 0.98;
      }

      lasta = a;
      lastb = b;

      if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return;

      sineCosine(a, b, 0);
      for (let i = 0; i < mcList.length; i++) {
        let rx1 = mcList[i].cx;
        let ry1 = mcList[i].cy * ca + mcList[i].cz * (-sa);
        let rz1 = mcList[i].cy * sa + mcList[i].cz * ca;

        let rx2 = rx1 * cb + rz1 * sb;
        let ry2 = ry1;
        let rz2 = rx1 * (-sb) + rz1 * cb;

        let rx3 = rx2 * cc + ry2 * (-sc);
        let ry3 = rx2 * sc + ry2 * cc;
        let rz3 = rz2;

        mcList[i].cx = rx3;
        mcList[i].cy = ry3;
        mcList[i].cz = rz3;

        let per = d / (d + rz3);

        aTags[i].style.left = `${rx3 * per + div1.offsetWidth / 2}px`;
        aTags[i].style.top = `${ry3 * per + div1.offsetHeight / 2}px`;
        aTags[i].style.opacity = per;
      }
    };

    setTimeout(() => {
      all.style.visibility = 'hidden';
      div1.style.visibility = 'visible';
    }, 4000);

    for (let i = 0; i < aTags.length; i++) {
      let tag = { offsetWidth: aTags[i].offsetWidth, offsetHeight: aTags[i].offsetHeight };
      mcList.push(tag);
    }

    positionAll();
    div1.onmouseover = () => (active = true);
    div1.onmouseout = () => (active = false);
    div1.onmousemove = (ev) => {
      mouseX = (ev.clientX - (div1.offsetLeft + div1.offsetWidth / 2)) / 5;
      mouseY = (ev.clientY - (div1.offsetTop + div1.offsetHeight / 2)) / 5;
    };

    setInterval(update, 30);
  }, []);

  return (
    <div className={styles.container}>
      <div id="all" className={styles.all}>
        <div className={styles.java}>Java</div>
        <div className={styles.script}>Script</div>
      </div>
      <div id="div1" className={styles.sphere}>
        {[
          { text: 'CSS', className: 'red' },
          { text: 'HTML5' },
          { text: 'DIV' },
          { text: 'style', className: 'blue' },
          { text: 'Color' },
          { text: '3D', className: 'red' },
          { text: 'JavaScript', className: 'yellow' },
        ].map((item, index) => (
          <a key={index} href="#" className={styles[item.className]}>
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SphereCloud;
