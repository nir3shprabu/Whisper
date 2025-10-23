SHELL := /bin/bash

check-helm:
	@helm version || $(MAKE) install-helm

check-kubectl:
	@kubectl version --client || $(MAKE) install-kubectl

install-helm:
	@curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
	@chmod 700 get_helm.sh
	@./get_helm.sh
	@rm get_helm.sh

install-kubectl:
	@curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
	@sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
	@rm kubectl

install-whisper:
	@helm upgrade --install whisper ./deploy/kubernetes/charts/ -n whisper-namespace --create-namespace -f values.yaml

upgrade-whisper:
	@helm upgrade whisper ./deploy/kubernetes/charts/ -n whisper-namespace -f values.yaml

delete-whisper:
	@helm uninstall whisper -n whisper-namespace

check-dependencies: check-helm check-kubectl
