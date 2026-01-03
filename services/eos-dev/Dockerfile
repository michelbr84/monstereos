FROM eostitan/eos-testnet:latest

RUN apt-get update && apt-get install curl dos2unix -y

COPY ./ /opt/application
RUN find /opt/application -name "*.sh" -exec dos2unix {} + && \
    find /opt/application -name "*.sh" -exec chmod +x {} +

VOLUME /opt/application

WORKDIR /opt/eosio/bin

# used by start.sh
ENV DATA_DIR /root/.local/share 
ENV CONFIG_DIR /opt/application/config

CMD dos2unix /opt/application/start.sh && \
    chmod +x /opt/application/start.sh && \
    /opt/application/start.sh
