FROM nginx:alpine

COPY build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080 443

CMD nginx -g "daemon off;"
