#
# Based on https://github.com/KyleAMathews/docker-nginx
#
FROM kyma/docker-nginx

RUN sed -i 's#uri/#uri/ \$uri.html#' /etc/nginx/sites-enabled/default

COPY . /var/www/

WORKDIR /etc/nginx

CMD ["/usr/sbin/nginx"]
