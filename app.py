from flask import Flask, request
import json
import requests


@app.route('/home', methods=["GET", "POST"])
def form_example():
    if request.method == 'POST':  #this block is only entered when the form is submitted
        start_date = request.form.get('start_date')
        end_date = request.form.get('end_date')
        duration = request.form.get('duration')
        destination = request.form['destination']
        season = request.form['season']
        origin = request.form['origin']
        num_travellers = request.form['num']
        flight_required = request.form['flight_required']
        username = request.form.get('username')
        #do some matching
        response = requests.get(f"http://accentour-final-bronze.uedpnpkwfs.us-east-2.elasticbeanstalk.com/get_tours_by_university_season_city/{destination}/fall/waterloo")

        uni_tours = response.json()

        for i in range(len(response.json())):
            date_tour = response.json()[i]['Date']
            if date_tour >= start_date and date_tour <= end_date and response.json()[i]['AvailableSpots']>num_travellers:
                tour_id = response.json()[i]['ID']
                requests.post(f"http://accentour-final-bronze.uedpnpkwfs.us-east-2.elasticbeanstalk.com/create_user?username={username}")
                requests.post(f"http://accentour-final-bronze.uedpnpkwfs.us-east-2.elasticbeanstalk.com/book_tour?tour_id={tour_id}&spots_required={num_travellers}&username={username}")
                return f"Success! You have been booked for tour ID # {tour_id}!"
                #print(response.json()[i]['Date'])
        return "Sorry, we could not find an available tour for your selected dates."



