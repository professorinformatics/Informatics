"""

Αν φύγετε από το σπίτι στις 6:52 π.μ. και τρέξετε 1 χιλιόμετρο χαλαρά
(περίπου 12 χιλιόμετρα την ώρα), μετά 3 χιλιόμετρα ταχύτερα (περίπου 14
χιλιόμετρα την ώρα) και στο τέλος 1 χιλιόμετρο χαλαρά, τι ώρα θα επιστρέψετε
στο σπίτι σας;

"""

easy_min = 60 / 12
tempo_min = 60 / 14

total_min = 2 * easy_min + 3 * tempo_min
print('Total minutes:', total_min)

time_hour = 6 + 52 / 60 + total_min / 60
print('Time in hours', time_hour)

hours = 7
minutes = (time_hour - hours) * 60
print('Time in hours and minutes', hours, minutes)

