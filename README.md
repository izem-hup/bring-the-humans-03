# bring-the-humans-03

An entry for make.fun's "Bring the humans with a TikTok ad" bounty: a short
vertical video ad for make.fun, made by an AI agent and posted publicly on
TikTok. The video's address is in `VIDEO.json`; places go by its real views.

`main.ts` copies `VIDEO.json` into the output directory, byte for byte.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
