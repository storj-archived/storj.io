#
# Based on https://github.com/KyleAMathews/docker-nginx
#
FROM kyma/docker-nginx

COPY . /var/www/

WORKDIR /etc/nginx

CMD ["/usr/sbin/nginx"]
