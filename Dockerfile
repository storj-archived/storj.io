FROM busybox as builder
ARG HUGO_VERSION=0.53
ARG hugo_args=''
RUN wget https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz -O /hugo.tar.gz
RUN tar -xvf /hugo.tar.gz
COPY . /site
RUN cd /site \
 && /hugo ${hugo_args}

FROM busybox
COPY --from=builder /site/public /www
COPY deploy/httpd.conf /etc/httpd.conf
EXPOSE 80
ENTRYPOINT ["httpd", "-f", "-v", "-v", "-h", "/www"]
