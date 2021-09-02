FROM docker.io/nginx:stable-alpine
ADD default.conf /etc/nginx/conf.d/default.conf
ADD build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80