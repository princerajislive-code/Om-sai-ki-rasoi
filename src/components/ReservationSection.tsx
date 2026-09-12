import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationData } from '../types';
import { CalendarCheck, Phone, MessageSquareShare, Users, Clock, Calendar, CheckCircle2 } from 'lucide-react';

interface ReservationSectionProps {
  initialOccasion?: string;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  initialOccasion
}) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    guests: '4 Guests',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    occasion: initialOccasion || 'Family Dinner',
    specialRequest: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReserveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }
    setIsSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = `Namaste Om Sai Ki Rasoi! I would like to reserve a table:\n\n*Name:* ${formData.name || 'Guest'}\n*Phone:* ${formData.phone || 'Provided upon confirmation'}\n*Guests:* ${formData.guests}\n*Date:* ${formData.date}\n*Time:* ${formData.time}\n*Occasion:* ${formData.occasion || 'General Dining'}\n*Special Request:* ${formData.specialRequest || 'None'}\n\nPlease confirm availability for Civil Lines, Prayagraj.`;
    const url = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reservation" className="py-24 sm:py-32 bg-[#FAF8F3] relative overflow-hidden border-t border-[#D9D5CC]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs text-[#6B4F3B] tracking-widest font-semibold uppercase">
              09 — HOSPITALITY RESERVATIONS
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#1A1A1A] tracking-tight">
            Your Table Awaits
          </h2>

          <p className="font-serif italic text-lg text-[#6B4F3B] font-light">
            &ldquo;Planning a family meal, celebration or simply craving something delicious?&rdquo;
          </p>
          
          <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-sans">
            Reserve ahead for prompt seating, or contact our host directly on WhatsApp for special arrangements.
          </p>
        </div>

        {/* Floating Architectural Booking Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl bg-white border border-[#D9D5CC] shadow-xl p-8 sm:p-12 overflow-hidden">
            
            {/* Subtle corner badge */}
            <div className="absolute top-0 right-0 py-1 px-4 rounded-bl-xl bg-[#6B4F3B] text-[#FAF8F3] text-[10px] uppercase font-mono tracking-widest font-semibold">
              Civil Lines · Prayagraj
            </div>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#7A8B5A]/10 text-[#7A8B5A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-[#1A1A1A] font-normal">
                    Reservation Request Received
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/75 font-sans mt-2 max-w-md mx-auto">
                    Thank you, {formData.name}. We look forward to welcoming you and your party of {formData.guests} on {formData.date} at {formData.time}.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#D9D5CC] max-w-md mx-auto text-xs text-[#1A1A1A]/70 text-left space-y-1">
                  <div><strong>Phone:</strong> {formData.phone}</div>
                  <div><strong>Occasion:</strong> {formData.occasion}</div>
                  {formData.specialRequest && <div><strong>Notes:</strong> {formData.specialRequest}</div>}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleWhatsAppBooking}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#7A8B5A] text-white text-xs font-ui uppercase tracking-wider font-medium hover:bg-[#68784d] transition-colors"
                  >
                    <MessageSquareShare className="w-4 h-4" />
                    <span>Confirm Instantly on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto py-3 px-6 rounded-full border border-[#D9D5CC] text-[#1A1A1A] text-xs font-ui uppercase tracking-wider hover:bg-[#FAF8F3] transition-colors"
                  >
                    Make Another Booking
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleReserveSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1A1A1A]/80">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#D9D5CC] bg-[#FAF8F3] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#6B4F3B] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1A1A1A]/80">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 077050 11220"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#D9D5CC] bg-[#FAF8F3] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#6B4F3B] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Guests */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1A1A1A]/80 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#6B4F3B]" />
                      <span>Party Size</span>
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#D9D5CC] bg-[#FAF8F3] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#6B4F3B] focus:bg-white transition-colors"
                    >
                      <option value="2 Guests">2 Guests (Table for 2)</option>
                      <option value="4 Guests">4 Guests (Family Table)</option>
                      <option value="6 Guests">6 Guests (Large Booth)</option>
                      <option value="8 Guests">8 Guests (Celebration)</option>
                      <option value="12+ Guests">12+ Guests (Party Feast)</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1A1A1A]/80 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#6B4F3B]" />
                      <span>Date</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#D9D5CC] bg-[#FAF8F3] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#6B4F3B] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Time */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1A1A1A]/80 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#6B4F3B]" />
                      <span>Preferred Time</span>
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#D9D5CC] bg-[#FAF8F3] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#6B4F3B] focus:bg-white transition-colors"
                    >
                      <option value="12:30">12:30 PM (Lunch)</option>
                      <option value="13:30">01:30 PM (Lunch)</option>
                      <option value="14:30">02:30 PM (Late Lunch)</option>
                      <option value="19:00">07:00 PM (Dinner)</option>
                      <option value="19:30">07:30 PM (Dinner)</option>
                      <option value="20:30">08:30 PM (Dinner)</option>
                      <option value="21:30">09:30 PM (Late Dinner)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Occasion */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1A1A1A]/80">
                      Occasion
                    </label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#D9D5CC] bg-[#FAF8F3] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#6B4F3B] focus:bg-white transition-colors"
                    >
                      <option value="Family Dinner">Family Dinner</option>
                      <option value="Birthday Celebration">Birthday Celebration</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Business / Colleague Lunch">Business / Colleague Lunch</option>
                      <option value="Friends Reunion">Friends Reunion</option>
                      <option value="Casual Visit">Casual Visit</option>
                    </select>
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1A1A1A]/80">
                      Special Request or Dietary Notes
                    </label>
                    <input
                      type="text"
                      name="specialRequest"
                      placeholder="e.g. Mild spices for kids / Vegan preference"
                      value={formData.specialRequest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#D9D5CC] bg-[#FAF8F3] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#6B4F3B] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Primary & Secondary Booking Action Buttons */}
                <div className="pt-4 border-t border-[#D9D5CC] flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-[#1A1A1A] text-[#FAF8F3] text-xs uppercase tracking-[0.16em] font-ui font-medium hover:bg-[#6B4F3B] transition-colors shadow-md"
                  >
                    <CalendarCheck className="w-4 h-4 text-[#D6B56C]" />
                    <span>Reserve Table</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full border border-[#7A8B5A] text-[#7A8B5A] hover:bg-[#7A8B5A]/10 text-xs uppercase tracking-[0.16em] font-ui font-medium transition-colors"
                  >
                    <MessageSquareShare className="w-4 h-4" />
                    <span>WhatsApp Reservation</span>
                  </button>

                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full border border-[#D9D5CC] text-[#1A1A1A] hover:border-[#6B4F3B] text-xs uppercase tracking-[0.16em] font-ui font-medium transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#6B4F3B]" />
                    <span>Call Restaurant</span>
                  </a>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
