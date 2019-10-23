FROM busybox as builder
COPY redirect/urls.txt /
RUN awk '$2!="" { \
        gsub("https://blog.storj.io", "", $1); \
        print "\t\trewrite " $1 " " $2 " permanent;"; \
      } \
      BEGIN { \
        print "server {\n\tlisten 80;\n\tserver_name localhost;\n"; \
        print "\tlocation = /health {\n\t\tadd_header Content-Type text/plain;\n\t\treturn 200 'ok';\n\t}"; \
        print "\tlocation / {"; \
      } \
      END { \
        print "\t\trewrite /(.*)$ https://storj.io/blog permanent;"; \
        print "\t}\n}" \
      }' urls.txt \
    > nginx.conf

FROM nginx:1.15.2
COPY --from=builder /nginx.conf /etc/nginx/conf.d/default.conf
