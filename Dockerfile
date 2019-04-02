FROM node:10.15

ENV NODE_ENV production
WORKDIR /root

ADD ./ /root
RUN yarn --production
