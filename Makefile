dataset: geojson topojson fmt

geojson:
	npx ts-node scripts/geojson_gen.ts

topojson:
	npx ts-node scripts/topojson_gen.ts

fmt:
	prettier --write data
