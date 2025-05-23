/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.reportes;

import com.mycompany.appsalonbelleza.models.AnuncioModel;
import com.mycompany.appsalonbelleza.models.AnunciosDTO;
import com.mycompany.appsalonbelleza.persistence.AnuncioDAO;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author brandon
 */
public class ReporteMarketing {
    AnuncioDAO reporteAnuncioDAO = new AnuncioDAO();
    
    public List<AnunciosDTO> anunciosMasMostradosPDF(){
        List<AnuncioModel> anunciosModels = reporteAnuncioDAO.obtenerAnunciosMasMostrados();
        List<AnunciosDTO> anunciosList = new ArrayList<>();
        
        for (AnuncioModel anuncio : anunciosModels) {
            AnunciosDTO anuncioReporte = new AnunciosDTO(anuncio.getId(), 
                    anuncio.getTipoAnuncio(),
                    anuncio.getDescripcion(), 
                    anuncio.getTiempoDuracion(), 
                    anuncio.getVecesMostrado()
            );
            anunciosList.add(anuncioReporte);
        }
        return anunciosList;
    }
    
    public List<AnunciosDTO> anunciosMenosMostradosPDF(){
        List<AnuncioModel> anunciosModels = reporteAnuncioDAO.obtenerAnunciosMenosMostrados();
        List<AnunciosDTO> anunciosList = new ArrayList<>();
        
        for (AnuncioModel anuncio : anunciosModels) {
            AnunciosDTO anuncioReporte = new AnunciosDTO(anuncio.getId(), 
                    anuncio.getTipoAnuncio(),
                    anuncio.getDescripcion(), 
                    anuncio.getTiempoDuracion(), 
                    anuncio.getVecesMostrado()
            );
            anunciosList.add(anuncioReporte);
        }
        return anunciosList;
    }
    
    public List<AnunciosDTO> anunciosMasCompradosPDF(){
        List<AnuncioModel> anunciosModels = reporteAnuncioDAO.obtenerAnunciosMasComprados();
        List<AnunciosDTO> anunciosList = new ArrayList<>();
        
        for (AnuncioModel anuncio : anunciosModels) {
            AnunciosDTO anuncioReporte = new AnunciosDTO(anuncio.getId(), 
                    anuncio.getTipoAnuncio(),
                    anuncio.getDescripcion(), 
                    anuncio.getTiempoDuracion(), 
                    anuncio.getVecesMostrado()
            );
            anunciosList.add(anuncioReporte);
        }
        return anunciosList;
    }
}
