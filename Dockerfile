FROM phusion/passenger-customizable:0.9.15

MAINTAINER michele@100shapes.com

ENV HOME /root

CMD ["/sbin/my_init"]

RUN /pd_build/utilities.sh
RUN /pd_build/nodejs.sh
RUN /pd_build/ruby2.2.sh

RUN apt-get update \
  && apt-get install -y
  
RUN gem install \
  github-pages \
  jekyll \
  jekyll-redirect-from \
  kramdown \
  rdiscount \
  rouge \
  listen

VOLUME /src
EXPOSE 4000

WORKDIR /src
ENTRYPOINT ["jekyll"]

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

