/*
 * Copyright © 2019-2025 Websoft.
 * 2025-04-07T09:36:46.6358617Z
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
/// Mandati Casa Madre
/// </summary>
/// <remarks>
/// <para>A partire da: 2020-09-24</para>
/// </remarks>
public class Mandates_General
{
	/// <summary>
	/// Codice latore assegnato da casa madre per alcuni mandati
	/// </summary>
	public string? BearerCode { get; set; }

	/// <summary>
	/// Codice del concessionario assegnato da casa madre
	/// </summary>
	public string DealerCode { get; set; }

	/// <summary>
	/// Descrizione del mandato
	/// </summary>
	public string Description { get; set; }

	/// <summary>
	/// Indica se il mandato è attivo
	/// </summary>
	public bool Enabled { get; set; }

	/// <summary>
	/// Codice associato al mandato
	/// </summary>
	public string MandateCode { get; set; }

	/// <summary>
	/// Codice della marca per i veicoli nuovi
	/// </summary>
	public string? NewBrandCode { get; set; }

	/// <summary>
	/// Codice della marca per i veicoli usati
	/// </summary>
	public string? UsedBrandCode { get; set; }

	/// <summary>
	/// Codice magazzino
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2021-11-16</para>
	/// </remarks>
	public string? WarehouseCode { get; set; }
}
