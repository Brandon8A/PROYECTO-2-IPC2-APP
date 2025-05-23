/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.appsalonbelleza.controllers;

import com.google.gson.Gson;
import com.mycompany.appsalonbelleza.models.AnuncioModel;
import com.mycompany.appsalonbelleza.models.ClienteModel;
import com.mycompany.appsalonbelleza.persistence.AnuncioDAO;
import com.mycompany.appsalonbelleza.persistence.ClienteDAO;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author brandon
 */
@WebServlet(name = "MostrarAnuncioServlet", urlPatterns = {"/MostrarAnuncioServlet"})
public class MostrarAnuncioServlet extends HttpServlet {

    ClienteDAO clienteDAO = new ClienteDAO();
    AnuncioDAO anuncioDAO = new AnuncioDAO();
    Gson gson = new Gson();

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet MostrarAnuncioServlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet MostrarAnuncioServlet at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String correoCliente = request.getParameter("correo");
        List<AnuncioModel> anuncios = new ArrayList<>();
        
        try {
            ClienteModel cliente = clienteDAO.obtenerCliente(correoCliente);
            
            List<String> gustos = Arrays.asList(cliente.getGustos().split(","));
            anuncios = anuncioDAO.obtenerAnunciosAcitvos();
            String json = gson.toJson(anuncioDAO.anunicoAMostrar(anuncios, gustos));
            
//            response.setStatus(HttpServletResponse.SC_OK);
            response.getWriter().write(json);
        } catch (Exception e) {
            System.out.println("Error en MostrarAnuncioServlet, metodo doGet()");
            System.out.println("Error: " + e);
        }
//        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
