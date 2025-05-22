/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.appsalonbelleza.controllers;

import com.google.gson.Gson;
import com.mycompany.appsalonbelleza.models.AnuncioModel;
import com.mycompany.appsalonbelleza.persistence.AnuncioDAO;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

/**
 *
 * @author brandon
 */
@MultipartConfig
@WebServlet(name = "AnunciosServlet", urlPatterns = {"/AnunciosServlet"})
public class AnunciosServlet extends HttpServlet {

    Gson gson = new Gson();
    AnuncioDAO anuncioDAO = new AnuncioDAO();

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
            out.println("<title>Servlet AnunciosServlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet AnunciosServlet at " + request.getContextPath() + "</h1>");
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

        System.out.println("Conectando con servlet AnuncioServlet metodo doGet()");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        try {
            List<AnuncioModel> servicios = anuncioDAO.findAll();
            String json = gson.toJson(servicios);
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
        String anuncioAGuardar;

        String descripcion = request.getParameter("descripcion");
        int tiempoDuracion = Integer.parseInt(request.getParameter("dias"));
        String tipoAnuncio = request.getParameter("tipoAnuncio");
        Double precioAdquirido = Double.parseDouble(request.getParameter("precioAdquirido"));

        if (tipoAnuncio.equals("texto")) {
            anuncioAGuardar = request.getParameter("textoAnuncio");
        } else if (tipoAnuncio.equals("imagen con texto")) {
            Part filePart = request.getPart("datoExtra");
            String nombreArchivo = Paths.get(filePart.getSubmittedFileName()).getFileName().toString();
            anuncioAGuardar = "imagenes/" + nombreArchivo; // ruta relativa para servir al cliente

            // Guardar imagen físicamente
            File destino = new File("/ruta/servidor/" + nombreArchivo);
            Files.copy(filePart.getInputStream(), destino.toPath(), StandardCopyOption.REPLACE_EXISTING);

        } else {
            anuncioAGuardar = request.getParameter("videoAnuncio");
        }

        AnuncioModel anuncioForm = new AnuncioModel(tipoAnuncio, tiempoDuracion, descripcion, anuncioAGuardar, precioAdquirido);

        try {
            this.anuncioDAO.insert(anuncioForm);

            response.setStatus(HttpServletResponse.SC_CREATED);
            response.getWriter().write("{\"message\":\"Anuncio creado correctamente\"}");
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Error en el servlet AnuncioServlet, meotodo doPost().");
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error al crear Administrador");
        }
//        processRequest(request, response);
    }

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        System.out.println("Conectando con servlet: AnunciosServlet, metodo doPut()");
        String idAnuncio = request.getParameter("anuncio");
        String tipoDeActualizacion = request.getParameter("tipoActualizacion");
        System.out.println("\nTipo de actualizacion: " + tipoDeActualizacion);
        System.out.println("\n");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        try {
            if (tipoDeActualizacion.equals("quitar")) {
                String json = gson.toJson(this.anuncioDAO.desactivarAnuncio(idAnuncio));
                System.out.println(json);
                response.setStatus(HttpServletResponse.SC_ACCEPTED);
                response.getWriter().write(json);
            } else {
                String json = gson.toJson(this.anuncioDAO.activarAnuncio(idAnuncio));
                System.out.println(json);
                response.setStatus(HttpServletResponse.SC_ACCEPTED);
                response.getWriter().write(json);
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Error en el servlet AnunciosServlet, metodo doPut().");
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error al desactivar anuncio");
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
