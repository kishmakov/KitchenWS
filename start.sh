#!/bin/sh
sudo /etc/init.d/nginx start
uwsgi --ini uwsgi.ini