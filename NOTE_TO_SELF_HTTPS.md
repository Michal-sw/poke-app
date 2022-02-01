Aby polaczenie z MQTT poprzez WSS dzialalo na HTTPS, trzeba upewnic sie,
ze certyfikat ktorego uzywa WSS jest uznany za zaufany na maszynie lokalnej

Zeby dzialalo musialem przeslac ten certyfikat na swoja maszyne.

Wyeksportowalem certyfikat przy uzyciu narzedzia keytool javy,
ten certyfikat przeslalem na swojego kompa przy uzycia sftp i dodalem
do keychain'u systemu. Dzieki temu moja maszyna oraz przegladarka ufaja,
ze websocket jest zaufany i nie wywala bledu "invalid certificate chain",
poniewaz certyfikat jest oznaczony jako zaufany w kechainie.
