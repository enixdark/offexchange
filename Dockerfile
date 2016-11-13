FROM rails:5.0.0

COPY Gemfile* /tmp/
WORKDIR /tmp
RUN bundle install --without test

RUN mkdir -p /usr/local/exchange
WORKDIR /usr/local/exchange
COPY . /usr/local/exchange
EXPOSE 3000

ENV http_proxy=
ENV https_proxy=
RUN bundle install
ENTRYPOINT ["bundle", "exec" , "rails", "s" , "-b" , "0.0.0.0"]
