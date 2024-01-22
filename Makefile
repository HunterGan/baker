Start:
	$(MAKE) -C restApi &>/dev/null & echo $$! > pid1.txt; sleep 5; kill -0 $$(cat pid1.txt); echo "Start Dir1Service Success" || exit 1
	$(MAKE) -C ui &>/dev/null & echo $$! > pid2.txt; sleep 5; kill -0 $$(cat pid2.txt); echo "Start Dir2Service Success" || exit 1
	$(MAKE) -C tg_admin &>/dev/null & echo $$! > pid3.txt; sleep 5; kill -0 $$(cat pid3.txt); echo "Start Dir3Service Success" || exit 1

.PHONY: Down

Down:
	kill $$(cat pid1.txt) && rm -f pid1.txt || echo "Service 1 could not be stopped."
	kill $$(cat pid2.txt) && rm -f pid2.txt || echo "Service 2 could not be stopped."
	kill $$(cat pid3.txt) && rm -f pid3.txt || echo "Service 3 could not be stopped."