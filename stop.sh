#!/bin/sh
sudo /etc/init.d/nginx stop
uwsgi --stop /tmp/kitchen.pid