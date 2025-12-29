/*
 * Copyright © 2019-2025 Websoft.
 * 2025-06-12T09:59:31.7802186Z
 * Questo file è stato generato automaticamente.
 */

#nullable enable

#pragma warning disable IDE0079
#pragma warning disable CS8618
#pragma warning disable IDE0005

using System;
using System.Collections.Generic;

namespace PublisherModels;

/// <summary>
/// Dati riguardanti i veicoli pesanti
/// </summary>
public class Vehicles_Truck
{
	/// <summary>
	/// Configurazione assi
	/// </summary>
	public string? AxlesArrangement { get; set; }

	/// <summary>
	/// Rispecchia il valore del flag "Fatturato" del DMS
	/// </summary>
	public bool? Billed { get; set; }

	/// <summary>
	/// Tipologia freni
	/// </summary>
	public string? BrakesType { get; set; }

	/// <summary>
	/// Descrizione del vano di carico
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2024-09-19</para>
	/// </remarks>
	public string? CargoCompartmentDescription { get; set; }

	/// <summary>
	/// Altezza del vano di carico
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2024-09-19</para>
	/// </remarks>
	public string? CargoCompartmentHeight { get; set; }

	/// <summary>
	/// Lunghezza del vano di carico
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2024-09-19</para>
	/// </remarks>
	public string? CargoCompartmentLength { get; set; }

	/// <summary>
	/// Larghezza del vano di carico
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2024-09-19</para>
	/// </remarks>
	public string? CargoCompartmentWidth { get; set; }

	/// <summary>
	/// Dimensioni del vano di carico
	/// </summary>
	/// <remarks>
	/// <para>Campo testuale libero, può non essere numerico.</para>
	/// </remarks>
	[Obsolete("Utilizzare CargoCompartmentDescription")]
	public string? CargoSpace { get; set; }

	/// <summary>
	/// Rispecchia il valore del flag "Conferma" del DMS
	/// </summary>
	public bool? Confirm { get; set; }

	/// <summary>
	/// Lato della guida
	/// </summary>
	public string? DriveOrientation { get; set; }

	/// <summary>
	/// Potenza motore
	/// </summary>
	/// <remarks>
	/// <para>Campo testuale libero, può non essere numerico.</para>
	/// </remarks>
	public string? EnginePower { get; set; }

	/// <summary>
	/// Tipologia allestimento
	/// </summary>
	public string? EquipmentType { get; set; }

	/// <summary>
	/// Tipologia asse aggiuntivo
	/// </summary>
	public string? ExtraAxle { get; set; }

	/// <summary>
	/// Famiglia di programmazione
	/// </summary>
	/// <remarks>
	/// <para>Sottoinsieme della gamma contenente veicoli che condividono le caratteristiche fisiche principali (portata, versione)</para>
	/// </remarks>
	public string? Fdp { get; set; }

	/// <summary>
	/// Descrizione sospensioni anteriori
	/// </summary>
	public string? FrontSuspension { get; set; }

	/// <summary>
	/// Tipologia cambio
	/// </summary>
	public string? GearboxType { get; set; }

	/// <summary>
	/// Massa a pieno carico
	/// </summary>
	/// <remarks>
	/// <para>Campo testuale libero, può non essere numerico.</para>
	/// </remarks>
	public string? GrossVehicleMass { get; set; }

	/// <summary>
	/// Abitabilità
	/// </summary>
	public string? Habitability { get; set; }

	/// <summary>
	/// Rispecchia il valore del flag "Mad" del DMS
	/// </summary>
	public bool? Mad { get; set; }

	/// <summary>
	/// Gamma
	/// </summary>
	/// <remarks>
	/// <para>La gamma è un insieme di veicoli con caratteristiche tecniche e commerciali comuni.</para>
	/// <para>A partire da: 2019-10-25</para>
	/// </remarks>
	public string? Range { get; set; }

	/// <summary>
	/// Tipologia asse posteriore
	/// </summary>
	public string? RearAxle { get; set; }

	/// <summary>
	/// Descrizione sospensioni posteriori
	/// </summary>
	public string? RearSuspension { get; set; }

	/// <summary>
	/// Rispecchia il valore del flag "Regress" del DMS
	/// </summary>
	public bool? Regress { get; set; }

	/// <summary>
	/// Segmento
	/// </summary>
	public string? Segment { get; set; }

	/// <summary>
	/// Rispecchia il valore del flag "Smatching" del DMS
	/// </summary>
	public bool? Smatching { get; set; }

	/// <summary>
	/// Descrizione sospensioni
	/// </summary>
	public string? Suspension { get; set; }

	/// <summary>
	/// Descrizione gomme (generico)
	/// </summary>
	public string? Tires { get; set; }

	/// <summary>
	/// Prezzo di acquisto delle gomme
	/// </summary>
	public double? TiresBuyPrice { get; set; }

	/// <summary>
	/// Numero gomme
	/// </summary>
	public int? TiresCount { get; set; }

	/// <summary>
	/// Descrizione gomme (specifico)
	/// </summary>
	public string? TiresDetails { get; set; }

	/// <summary>
	/// Sconto sul prezzo di acquisto delle gomme
	/// </summary>
	public double? TiresDiscount { get; set; }

	/// <summary>
	/// Destinazione d'uso
	/// </summary>
	public string? VehiclePurpose { get; set; }

	/// <summary>
	/// Versione veicolo pesante
	/// </summary>
	public string? Version { get; set; }

	/// <summary>
	/// Codice modello Veicolo Pesante
	/// </summary>
	public string? VpModelCode { get; set; }

	/// <summary>
	/// Interasse
	/// </summary>
	/// <remarks>
	/// <para>Campo testuale libero, può non essere numerico.</para>
	/// </remarks>
	public string? Wheelbase { get; set; }

	/// <summary>
	/// Tipologia ruote
	/// </summary>
	public string? WheelType { get; set; }
}
