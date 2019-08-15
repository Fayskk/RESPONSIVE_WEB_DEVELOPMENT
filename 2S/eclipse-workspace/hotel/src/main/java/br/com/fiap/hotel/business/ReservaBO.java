package br.com.fiap.hotel.business;

import java.util.Date;

import br.com.fiap.hotel.model.entities.Reserva;

public class ReservaBO {
	
	public boolean validarCheckout(Reserva r) {
		//Checkout maior que data atual
		return r.getCheckin().after(new Date());
	}
	
	public boolean validarCheckinCheckout(Reserva r) {
		return r.getCheckin().before(r.getCheckout());
	}
}
