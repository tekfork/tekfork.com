BUILD_DIR = dist

.PHONY: dev build deploy clean check_astro

dev: check_astro
	npm run dev

build:
	npm run build
# 	npx astro build

# Deploys whatever is in ./dist to cloudflare
deploy: build
	npx wrangler deploy

clean:
	rm -rf $(BUILD_DIR)

check_astro:
	npm run astro check
