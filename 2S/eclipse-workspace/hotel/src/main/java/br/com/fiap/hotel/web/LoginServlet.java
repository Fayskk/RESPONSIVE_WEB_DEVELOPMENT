package br.com.fiap.hotel.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.fiap.hotel.business.UsuarioBO;
import br.com.fiap.hotel.dao.UsuarioDAO;
import br.com.fiap.hotel.model.entities.Usuario;

public class LoginServlet extends HttpServlet{
	private static final long serialVersionUID = -4893569432445997382L;
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		resp.setContentType("text/html");
		PrintWriter out = resp.getWriter();
		
		String login = req.getParameter("login");
		String senha = req.getParameter("senha");
		
		Usuario usuario = new Usuario(login, senha);
		out.println("<html><body>");
		
		if (new UsuarioBO().validarUsuario(usuario)){
			new UsuarioDAO().adicionar(usuario);
			out.println("<h2>Usuário " + usuario.getNome() + " foi criado. </h2>" );
		}else {
			out.println("<h2 style=\"color:red;\">SLA PREGUIça!! informa direito/>");
		}
		
		out.println("</body></html>");
		out.flush();
		out.close();
	}
 
}
