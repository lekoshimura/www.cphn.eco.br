#!/bin/bash
echo -e "\n\n>>> Enviando para www.cphn.eco.br"
rsync -avhz /home/leonardo/Work/www.cphn.eco.br/dist/ leonardo@www.cphn.eco.br:~/www.cphn.eco.br
ssh leonardo@www.cphn.eco.br -t 'sudo cp -r ~/www.cphn.eco.br/* /var/www/www.cphn.eco.br/public_html'
