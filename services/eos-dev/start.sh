echo "Starting eosiodev service ..."  

if [ "$(ls -A $DATA_DIR)" ]; then
    nodeos --config-dir $CONFIG_DIR --data-dir $DATA_DIR -e --hard-replay
else
    nodeos --config-dir $CONFIG_DIR --data-dir $DATA_DIR -e #--delete-all-blocks
fi