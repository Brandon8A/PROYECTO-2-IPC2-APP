/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.appsalonbelleza.controllers;

import com.google.gson.Gson;
import com.mycompany.appsalonbelleza.models.GestorServiciosModel;
import com.mycompany.appsalonbelleza.persistence.GestorServiciosDAO;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
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
@WebServlet(urlPatterns = {"/GestorServiciosServlet"})
public class GestorServiciosServlet extends HttpServlet {
    
    private final GestorServiciosDAO gestorServiciosDAO = new GestorServiciosDAO();
    private final Gson gson = new Gson();

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
            out.println("<title>Servlet GestorServiciosServlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet GestorServiciosServlet at " + request.getContextPath() + "</h1>");
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
//        processRequest(request, response);
        System.out.println("Conectando con servlet GestorServiciosServlet");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        
        try {
            List<GestorServiciosModel> gestorServicios = gestorServiciosDAO.findAll();
            String json = gson.toJson(gestorServicios);
            response.getWriter().write(json);
        } catch (Exception e) {
            e.printStackTrace();
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error al tener usuarios Gestor de Servicios");
        }
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
        System.out.println("Conectado con SERVLET: GestorServiciosServlet, metodo doPost()");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        try {
            BufferedReader reader = request.getReader();
            GestorServiciosModel gestorServiciosForm = gson.fromJson(reader, GestorServiciosModel.class);
            this.gestorServiciosDAO.insert(gestorServiciosForm);
            
            response.setStatus(HttpServletResponse.SC_CREATED);
            response.getWriter().write("{\"message\":\"Usuario creado correctamente\"}");
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Error en el servlet RegistrarUsuario, meotodo post.");
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error al crear Administrador");
        }
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
