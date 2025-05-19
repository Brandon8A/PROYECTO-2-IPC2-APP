/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.appsalonbelleza.controllers;

import com.google.gson.Gson;
import com.mycompany.appsalonbelleza.models.FechasModel;
import com.mycompany.appsalonbelleza.models.ServicioModel;
import com.mycompany.appsalonbelleza.persistence.ServiciosDAO;
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
@WebServlet(name = "ReportesServiciosServlet", urlPatterns = {"/ReportesServiciosServlet"})
public class ReportesServiciosServlet extends HttpServlet {

    private ServiciosDAO serviciosDAO = new ServiciosDAO();
    public Gson gson = new Gson();

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
            out.println("<title>Servlet ReportesServiciosServlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet ReportesServiciosServlet at " + request.getContextPath() + "</h1>");
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
        String json;
        System.out.println("Conectando con servlet ReportesServiciosServlet metodo doGet()");
        String tipoReporte = request.getParameter("tipoReporte");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        try {
            if (tipoReporte.equals("servicioQueGeneraMasIngresos")) {
                List<ServicioModel> servicios = serviciosDAO.obtenerServicioQueGeneraMasGanancia();
                json = gson.toJson(servicios);
            } else if (tipoReporte.equals("serviciosMasReservados")) {
                List<ServicioModel> servicios = serviciosDAO.obtenerServiciosMasReservados();
                json = gson.toJson(servicios);
            } else {
                List<ServicioModel> servicios = serviciosDAO.obtenerServiciosMenosReservados();
                json = gson.toJson(servicios);
            }
            response.getWriter().write(json);
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Error en servlet ServiciosServlet en metodo doGet()");
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
        String json;
        System.out.println("Conectando con servlet ReportesServiciosServlet metodo doPost()");
        String tipoReporte = request.getParameter("tipoReporte");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        try {
            BufferedReader reader = request.getReader();
            FechasModel fechasForm = gson.fromJson(reader, FechasModel.class);
            if (tipoReporte.equals("serviciosMasReservadosPorFecha")) {
                List<ServicioModel> servicios = serviciosDAO.obtenerServiciosMasReservadosPorFecha(fechasForm.getFechaInicio(), fechasForm.getFechaFin());
                json = gson.toJson(servicios);
                response.setStatus(HttpServletResponse.SC_ACCEPTED);
                response.getWriter().write(json);
            } else {
                List<ServicioModel> servicios = serviciosDAO.obtenerServiciosMenosReservadosPorFecha(fechasForm.getFechaInicio(), fechasForm.getFechaFin());
                json = gson.toJson(servicios);
                response.setStatus(HttpServletResponse.SC_ACCEPTED);
                response.getWriter().write(json);
            }
        } catch (Exception e) {
        }
//        processRequest(request, response);
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
