package br.com.fiap.javaweb.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/ex02")
public class Ex02 extends HttpServlet{

	private static final long serialVersionUID = 6416969764800258236L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html");
		
		String nome = req.getParameter("nome");
		String descricao = req.getParameter("descicao");
		
		
		PrintWriter out = resp.getWriter();
		out.println("<html><body>");
		out.println("<h1>Seu nome</h1>");
		out.println("<h3>" + req.getParameter("nome") + "</h3>");
		out.println("<p>" + req.getParameter("descricao") + "</p>");
		out.println("</body></html>");
		out.flush();
		out.close();
	}

}
