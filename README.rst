|Build Status| |Codecov| |npm_version| |npm_downloads| |license| |semantic-release| ## As many of these as you'd like to include, or others if you wish!

demo-mfe
==============================

Please tag **@open-craft** on any PRs or issues.  Thanks!

Introduction
------------

*This is a demonstration MFE for the OpenCraft blog.*

*This MFE only contains some basic functionality to demonstrate how to make MFEs.*

*You can `read the blog entry for this project here<https://opencraft.com/blog/building-your-own-micro-front-end-for-open-edx/>`_.*

Installation
------------

This MFE is bundled with `Devstack <https://github.com/edx/devstack>`_, see the `Getting Started <https://github.com/edx/devstack#getting-started>`_ section for setup instructions.

You will need to `install NVM <https://github.com/nvm-sh/nvm>`_ in order to use the instructions below and ensure a compatible node/npm version.

1. Follow these instructions to install and run the MFE:

   .. code-block::

      mkdir -p ~/workspace/
      cd ~/workspace/
      git clone https://github.com/open-craft/demo-mfe.git
      nvm install
      nvm use
      npm install -g npm@8.6.0
      npm install
      npm run start

Environment Variables/Setup Notes
---------------------------------

* TBD

Any Other Relevant Sections
---------------------------

*This is optional, but you might have additional sections you wish to cover such as i18n notes, build process*
*notes, stuff about ADRs, stuff about architecture, or more.*

Known Issues
------------

* None yet

Development Roadmap
-------------------

The following is a list of current short-term development targets, in (rough) descending order of priority:

* Demonstrate basic MFE development.
