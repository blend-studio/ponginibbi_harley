/*
 * Copyright © 2019-2025 Websoft.
 * 2025-04-07T09:36:46.6359265Z
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
/// Parametri relativi ai mandati Casa Madre
/// </summary>
/// <remarks>
/// <para>A partire da: 2020-09-24</para>
/// </remarks>
public class Mandates_Parameters
{
	/// <summary>
	/// Codice del parametro
	/// </summary>
	public string Code { get; set; }

	/// <summary>
	/// Descrizione parametro
	/// </summary>
	public string? Description { get; set; }

	/// <summary>
	/// ID univoco elemento
	/// </summary>
	public string ItemId { get; set; }

	/// <summary>
	/// Valore del parametro
	/// </summary>
	public string? Value { get; set; }
}
