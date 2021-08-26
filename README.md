# MSS Homepage

This is the [Jekyll](https://jekyllrb.com/) source code of the static part of the MSS Homepage published at https://www.macroseismicsensor.at/.

The static HTML files can be build using the Jekyll build workflow described in the [Jekyll documentation](https://jekyllrb.com/docs/).

## Building for local development.
To make the internal links of the site work for local development, the `_config_dev.yml` configuration file can be used in addition to the main configuration file 
`_config.yml`.

`bundle exec jekyll serve --config _config.yml,_config_dev.yml`

