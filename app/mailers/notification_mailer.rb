class NotificationMailer < ApplicationMailer
    default from: 'franksavena@gmail.com'

    def trip_notification(trip)
      @trip = trip
      mail(to: @trip.user.email, subject: 'Your trip has been created')
    end
end
