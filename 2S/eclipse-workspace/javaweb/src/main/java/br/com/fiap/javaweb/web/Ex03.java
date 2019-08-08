package br.com.fiap.javaweb.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/ex03")
public class Ex03 extends HttpServlet{

	private static final long serialVersionUID = -8789294134089218545L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html");
		
		//String data = req.getParameter("data");
		//Date agora;
		//try {
		//	agora = data == null ? new Date() : df.parse();
		// } catch (ParseException e) {
		// 		e.printStackTrace();
		//}
		
		
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
		
		Date date = new Date();  
		
		PrintWriter out = resp.getWriter();
		out.println("<html><body>");
		out.println("<h1>" + formatter.format(date) + "</h1>");
		out.println("</body></html>");
		out.flush();
		out.close();
	}

}
