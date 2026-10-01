# Hello World App — SAP BTP

SAPUI5 Hello World application deployed to SAP BTP, Cloud Foundry environment, and launched as a tile from SAP Build Work Zone, standard edition.

## Structure

- `helloworld/` — SAPUI5 application
- `mta.yaml` — multitarget application descriptor with managed approuter
- `xs-security.json` — xsuaa configuration

## Build and deploy

```bash
mbt build
cf deploy mta_archives/helloworld_0.0.1.mtar
```

The project is built and deployed automatically by SAP Continuous Integration and Delivery on every push to `main`.
