Nice-alert.js
===============================

Before:

![Ugly](/NV/nice-alert.js/raw/master/ugly.png)


After:

![Nice](/NV/nice-alert.js/raw/master/nice.png)


[Demo](http://nv.github.com/nice-alert.js/)

For Firefox Greasemonkey and Safari GreaseKit users: just click on [nice-alert.user.js](/NV/nice-alert.js/raw/master/nice_alert.user.js) 

For Opera users: download [nice-alert.user.js](/NV/nice-alert.js/raw/master/nice_alert.user.js) and rename it to nice-alert.js (without 'user'). 


Quote from Jef Raskin
---------------------
The information-theoretic efficiency *E* of an interface is defined as the minimum amount of information necessary to do a task, divided by the amount of information that has to be supplied by the user. As is true of physical efficiency, *E* is at least 0 and is at most 1. Where no work is required for a task and no work is done, the efficiency is defined as 1.

*E* can be 0 when the user is required to provide information that is totally unnecessary. Surprisingly, a number of interface details achieve the dubious honor of having *E*=0. A dialog box that allows the user only one possible action, such as clicking the box's OK button, is such an example. (JavaScript has a command, *Alert*, solely for creating such unnecessary boxes: The designers were wise enough to remove goto from the JavaScript language to force structured code, but they failed to provide similar guidance on the interface side.)