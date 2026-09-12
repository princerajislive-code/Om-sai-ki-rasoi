import React, { useState } from 'react';
import { CartItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { X, Plus, Minus, Trash2, MessageSquareShare, Utensils } from 'lucide-react';

interface OrderCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const OrderCartModal: React.FC<OrderCartModalProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [guestName, setGuestName] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  if (!isOpen) return null;

  const totalAmount = cart.reduce(
    (sum, current) => sum + current.item.price * current.quantity,
    0
  );

  const handleSendWhatsAppOrder = () => {
    if (cart.length === 0) return;

    let message = `*Namaste Om Sai Ki Rasoi (Civil Lines, Prayagraj)*\n`;
    message += `I would like to place an order inquiry:\n\n`;
    message += `*Type:* ${orderType === 'dine-in' ? 'Table Order / Dine-In' : 'Takeaway / Pickup'}\n`;
    if (guestName.trim()) {
      message += `*Guest Name:* ${guestName.trim()}\n`;
    }
    message += `\n*Selected Delicacies:*\n`;

    cart.forEach((ci, idx) => {
      message += `${idx + 1}. ${ci.item.name} (${ci.item.category}) × ${ci.quantity} = ₹${ci.item.price * ci.quantity}\n`;
    });

    message += `\n*Total Estimate:* ₹${totalAmount}\n`;

    if (specialInstructions.trim()) {
      message += `*Instructions:* ${specialInstructions.trim()}\n`;
    }

    message += `\nPlease confirm preparation time and table/pickup details. Thank you!`;

    const url = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FAF8F3] rounded-3xl overflow-hidden border border-[#D9D5CC] shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 bg-white border-b border-[#D9D5CC] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#6B4F3B] font-semibold block">
              WhatsApp Order Builder
            </span>
            <h3 className="font-serif text-2xl text-[#1A1A1A] font-medium">
              Your Selected Dishes
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-[#D9D5CC] hover:bg-black/5 text-[#1A1A1A] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#D9D5CC]/40 text-[#6B4F3B] flex items-center justify-center mx-auto">
                <Utensils className="w-6 h-6" />
              </div>
              <p className="font-serif text-lg text-[#1A1A1A]">Your order basket is empty</p>
              <p className="text-xs text-[#1A1A1A]/60 max-w-xs mx-auto">
                Explore our menu to add authentic Indian, Continental, or Chinese items directly to your WhatsApp order list.
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-3">
                {cart.map((ci) => (
                  <div
                    key={ci.item.id}
                    className="p-3.5 rounded-xl bg-white border border-[#D9D5CC] flex items-center justify-between gap-3 shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={ci.item.image}
                        alt={ci.item.name}
                        className="w-12 h-12 rounded-lg object-cover border border-[#D9D5CC]"
                      />
                      <div>
                        <h4 className="font-serif text-sm font-medium text-[#1A1A1A] line-clamp-1">
                          {ci.item.name}
                        </h4>
                        <span className="text-xs text-[#6B4F3B] font-mono">
                          ₹{ci.item.price} each
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-[#D9D5CC] rounded-lg overflow-hidden bg-[#FAF8F3]">
                        <button
                          onClick={() => onUpdateQuantity(ci.item.id, -1)}
                          className="p-1.5 hover:bg-black/5 text-[#1A1A1A]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono font-medium text-[#1A1A1A]">
                          {ci.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(ci.item.id, 1)}
                          className="p-1.5 hover:bg-black/5 text-[#1A1A1A]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(ci.item.id)}
                        className="p-2 text-[#1A1A1A]/50 hover:text-red-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Options */}
              <div className="space-y-4 pt-4 border-t border-[#D9D5CC]">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderType('dine-in')}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium transition-colors ${
                      orderType === 'dine-in'
                        ? 'border-[#6B4F3B] bg-[#6B4F3B]/10 text-[#6B4F3B]'
                        : 'border-[#D9D5CC] text-[#1A1A1A]/70'
                    }`}
                  >
                    Dine-in / Table Order
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('takeaway')}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium transition-colors ${
                      orderType === 'takeaway'
                        ? 'border-[#6B4F3B] bg-[#6B4F3B]/10 text-[#6B4F3B]'
                        : 'border-[#D9D5CC] text-[#1A1A1A]/70'
                    }`}
                  >
                    Takeaway / Pick-up
                  </button>
                </div>

                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Your Name (Optional)"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#D9D5CC] bg-white text-xs text-[#1A1A1A] focus:outline-none focus:border-[#6B4F3B]"
                  />
                  <input
                    type="text"
                    placeholder="Notes (e.g. Mild spice, extra onions, packing request)"
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#D9D5CC] bg-white text-xs text-[#1A1A1A] focus:outline-none focus:border-[#6B4F3B]"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer actions */}
        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-[#D9D5CC] space-y-4">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs text-[#1A1A1A]/60 font-sans block">Subtotal</span>
                <span className="text-[10px] text-[#7A8B5A]">Taxes included · Pay at restaurant</span>
              </div>
              <span className="font-serif text-2xl font-bold text-[#1A1A1A]">
                ₹{totalAmount}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClearCart}
                className="py-3 px-4 rounded-full border border-[#D9D5CC] text-xs font-ui text-[#1A1A1A]/70 hover:bg-black/5 transition-colors"
              >
                Clear
              </button>

              <button
                onClick={handleSendWhatsAppOrder}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#7A8B5A] text-white text-xs font-ui uppercase tracking-wider font-semibold hover:bg-[#68784d] transition-colors shadow-md"
              >
                <MessageSquareShare className="w-4 h-4" />
                <span>Send Order to WhatsApp</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
