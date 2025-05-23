/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.appsalonbelleza.controllers;

import com.mycompany.appsalonbelleza.aplication.DBConnection;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

/**
 *
 * @author brandon-ochoa
 */
@MultipartConfig
@WebServlet(urlPatterns = {"/ImagenServlet"})
public class ImagenServlet extends HttpServlet {

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
            out.println("<title>Servlet ImagenServlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet ImagenServlet at " + request.getContextPath() + "</h1>");
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
        processRequest(request, response);
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
        Part filePart = request.getPart("image");
        String correo = request.getParameter("correo");
        String usuarioFoto = request.getParameter("usuario");
        System.out.println("Ingresando a servlet ImagenServlet, metodo: doPost()");

        if (filePart == null || correo == null) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Faltan datos");
            return;
        }

        String fileName = correo + ".jpg";

// ✅ Ruta absoluta en /webapps/miApp/fotosPerfil/
        //String uploadsDirPath = getServletContext().getRealPath("/") + "fotosPerfil/";
        String uploadsDirPath = "/home/brandon/apache-tomcat-9.0.102/webapps/AppSalonBelleza-1.0-SNAPSHOT/fotosPerfil/";
        File uploadsDir = new File(uploadsDirPath);

// Crea carpeta si no existe
        if (!uploadsDir.exists()) {
            uploadsDir.mkdirs();
        }

// ✅ Ruta final del archivo
        File file = new File(uploadsDir, fileName);

// Elimina archivo anterior si existe
        if (file.exists()) {
            boolean eliminado = file.delete();
            if (eliminado) {
                System.out.println("Archivo eliminado: " + file.getAbsolutePath());
            } else {
                System.out.println("No se pudo eliminar el archivo: " + file.getAbsolutePath());
            }
        }

// Guarda la imagen
        try (InputStream input = filePart.getInputStream()) {
            Files.copy(input, file.toPath(), StandardCopyOption.REPLACE_EXISTING);
        }

        System.out.println("Archivo guardado en: " + file.getAbsolutePath());

// Guarda solo el path relativo en la base de datos
        String relativePath = "fotosPerfil/" + fileName;
        String imageUrl = "http://localhost:8080/AppSalonBelleza-1.0-SNAPSHOT/" + relativePath;

        try (Connection conn = DBConnection.getConnection()) {
            String sql;
            if ("Cliente".equals(usuarioFoto)) {
                sql = "UPDATE Cliente SET path_foto = ? WHERE correo_cliente = ?";
            } else {
                sql = "UPDATE Empleado SET path_foto = ? WHERE correo_empleado = ?";
            }
            try (PreparedStatement stmt = conn.prepareStatement(sql)) {
                stmt.setString(1, relativePath);
                stmt.setString(2, correo);
                stmt.executeUpdate();
            }
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error: " + e);
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error al guardar en la base de datos");
            return;
        }

        // Enviar el path como respuesta
        response.setContentType("application/json");
        response.getWriter().write("{\"imagePath\": \"" + imageUrl + "\"}");
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
