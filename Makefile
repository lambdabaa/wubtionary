JS = $(shell find src/ -name "*.js")
BUILD = $(patsubst src/%.js, build/%.js, $(JS))

.PHONY: all
all: app.js

.PHONY: clean
clean:
	rm -rf app.* build

app.js: $(BUILD)
	./node_modules/.bin/browserify ./build/main.js -o $@

build/%.js: src/%.js
	@mkdir -p "$(@D)"
	./node_modules/.bin/babel $< -o $@
