# apptmnt

Laravel Appointment Creator

## Documentation

1) Project scaffolding: composer create-project --prefer-dist laravel/laravel --prefer-dist -vvv
2) Follow instructions here for adding a local environment: https://laravel.com/docs/5.4/homestead
3) To serve the project using PHP's built-in development server run: php artisan serve and you can access the website
using the following url: http://localhost:8000
4) Add the following to Homestead.yaml (You can change the directory to the place where you downloaded the project):

```yaml
folders:
    - map: ~/projects/github/bitclaw/
      to: /home/vagrant/bitclaw
      type: "nfs"

sites:
    - map: apptmnt.app
      to: /home/vagrant/bitclaw/apptmnt/public

databases:
    - homestead
    - apptmnt

```

## Useful pages

- [web accessibility checker]https://achecker.ca/checker/index.php
- [web accessibility checker]http://wave.webaim.org/
- [web accessibility checker]https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd

