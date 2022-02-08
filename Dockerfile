FROM 192.168.1.20:8083/nginx:alpine as production-stage
COPY ./dist /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d
# support running as arbitrary user which belogs to the root group
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx
RUN chgrp -R root /var/cache/nginx
RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf
RUN chmod -R 777 /usr/share/nginx/html
RUN addgroup nginx root
USER root
CMD ["nginx", "-g", "daemon off;"]



